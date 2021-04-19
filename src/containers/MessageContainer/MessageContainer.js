import React from 'react';
import { useSelector } from "react-redux";
import Message from '../../components/Message/Message';
import PropTypes from "prop-types";

function MessageContainer(props) {

  MessageContainer.propTypes = {
    message: PropTypes.string.isRequired,
  };

  const message = useSelector((state) => state.message);

  return (
    <div>
      <Message message={message}/>
    </div>
  );
}

export default MessageContainer;