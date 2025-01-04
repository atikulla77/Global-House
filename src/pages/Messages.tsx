import Chatting from "./Chatting";
import MessageList from "./MessageList"
function Messages() {
  return (
    <div className="w-[100%] h-[100%] relative scrollbar-hide bg-[#1F2022]">
      <MessageList />
    </div>
  );
}

export default Messages;
