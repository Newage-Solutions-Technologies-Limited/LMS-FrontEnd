import { useState } from "react";
import Quill from "./notes/Quill";
import user from "../../assets/lanre.png";

export default function QA() {
  const [threads, setThreads] = useState([]);
  //   const [editingIndex, setEditingIndex] = useState(null);

  function addQuestion(question) {
    setThreads((prevThreads) => [
      {
        question,
        responses: [],
      },
      ...prevThreads,
    ]);
  }

  //   function addResponse(index, response) {
  //     setThreads((prevThreads) => {
  //       const updatedThreads = [...prevThreads];
  //       updatedThreads[index].responses.push(response);
  //       return updatedThreads;
  //     });
  //   }

  return (
    <div className="notes-contents">
      {/* Component to add a new question */}
      <Quill
        onUpdateNote={(question) => addQuestion(question)}
        title2="Add Question"
        placeholder="Type your question here..."
      />

      {/* Displaying existing threads/questions and responses */}
      {threads.length > 0 ? (
        <div className="previous-notes">
          <h4>Previous Questions</h4>
          {threads.map((thread, index) => (
            <div key={index} className="questions">
              <div>
                <span className="questions-image">
                  <img src={user} alt="user-image" className="user-image" />
                </span>
              </div>

              <div>
                <p className="user-tag">You</p>
                <p className="user-times">
                  <span className="user-times-date">Dec 23, 2024</span>
                  <span>16:34</span>
                </p>
                <p className="user-question">{thread.question}</p>

                {/* Display responses or 'No responses yet' */}
                {thread.responses.length > 0 ? (
                  thread.responses.map((response, responseIndex) => (
                    <p key={responseIndex} className="user-response">
                      {response}
                    </p>
                  ))
                ) : (
                  <p className="user-response">No responses yet</p>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
