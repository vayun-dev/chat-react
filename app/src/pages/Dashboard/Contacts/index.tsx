import React, { useEffect, useState } from "react";

// hooks
import { useRedux } from "../../../hooks/index";

// components
import Loader from "../../../components/Loader";
import AppSimpleBar from "../../../components/AppSimpleBar";
import InviteContactModal from "../../../components/InviteContactModal";
import EmptyStateResult from "../../../components/EmptyStateResult";
import ListHeader from "./ListHeader";
import Contact from "./Contact";
import GET_CONTACTS from "../../../graphQL/query/getContacts";
import { useQuery } from "@apollo/client";

// actions
import {
  getContacts,
  inviteContact,
  resetContacts,
  getChannelDetails,
  getChatUserDetails,
  getChatUserConversations,
  changeSelectedChat,
} from "../../../redux/actions";

//utils
import { divideByKey, DivideByKeyResultTypes } from "../../../utils";

interface IndexProps {}

const Index = (props: IndexProps) => {
  // global store
  const { dispatch, useAppSelector } = useRedux();
  const {
    loading: getContactsLoading,
    error,
    data: contactsList,
  } = useQuery(GET_CONTACTS, {
    fetchPolicy: "network-only",
  });
  // const { contactsList, getContactsLoading, isContactInvited } = useAppSelector(
  //   state => ({
  //     contactsList: state.Contacts.contacts,
  //     getContactsLoading: state.Contacts.getContactsLoading,
  //     isContactInvited: state.Contacts.isContactInvited,
  //   })
  // );

  /*
  get contacts
  */
  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  const [contacts, setContacts] = useState<Array<any>>([]);
  const [contactsData, setContactsData] = useState<Array<any>>([]);
  useEffect(() => {
    if (!getContactsLoading) {
      console.log("Panna", contactsList);

      setContacts(contactsList.getContactUser);
    }
  }, [contactsList, getContactsLoading]);

  useEffect(() => {
    console.log("Panna", contacts);
    if (contacts.length > 0) {
      const formattedContacts = divideByKey("name", contacts);
      setContactsData(formattedContacts);
    }
  }, [contacts]);

  /*
  add contact modal handeling
  */
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  /*
  onInvite handeling
  */
  const onInviteContact = (data: any) => {
    dispatch(inviteContact(data));
  };
  // useEffect(() => {
  //   if (isContactInvited) {
  //     setIsOpen(false);
  //     setTimeout(() => {
  //       dispatch(resetContacts("isContactInvited", false));
  //     }, 1000);
  //   }
  // }, [dispatch, isContactInvited]);

  /*
  contact search
  */
  const [search, setSearch] = useState("");
  const onChangeSearch = (value: string) => {
    setSearch(value);
    let modifiedContacts = [...contactsList];
    let filteredContacts = (modifiedContacts || []).filter((c: any) =>
      c["name"].toLowerCase().includes(value.toLowerCase())
    );
    setContacts(filteredContacts);
  };

  const totalC = (contacts || []).length;
  const onSelectChat = (id: string | number, isChannel?: boolean) => {
    if (isChannel) {
      dispatch(getChannelDetails(id));
    } else {
      dispatch(getChatUserDetails(id));
    }
    dispatch(getChatUserConversations(id));
    dispatch(changeSelectedChat(id));
  };

  return (
    <>
      <div className="position-relative">
        {getContactsLoading && <Loader />}
        <ListHeader
          search={search}
          onChangeSearch={onChangeSearch}
          openModal={openModal}
        />

        <AppSimpleBar className="chat-message-list chat-group-list">
          <div>
            {totalC === 0 ? (
              <EmptyStateResult searchedText={search} />
            ) : (
              (contactsData || []).map(
                (letterContacts: DivideByKeyResultTypes, key: number) => (
                  <Contact
                    letterContacts={letterContacts}
                    key={key}
                    index={key}
                    onSelectChat={onSelectChat}
                  />
                )
              )
            )}
          </div>
        </AppSimpleBar>
      </div>
      <InviteContactModal
        isOpen={isOpen}
        onClose={closeModal}
        onInvite={onInviteContact}
      />
    </>
  );
};

export default Index;
