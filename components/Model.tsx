import { createPortal } from "react-dom";
import React, { useState } from "react";
import styled from "@emotion/styled";

interface ModelProps {
  // Add your model props here
  open: boolean;
  setIsOpen: (open: boolean) => void;
}

const ModelContainer = styled.div`
  background-color: rgba(255, 255, 255, 1);
  border: 4px solid black;
  border-radius: 12px;
  color: black;
  display: flex;
  justify-content: center;
  left: 50%;
  overflow: hidden;
  padding: 16px 24px;
  position: fixed;
  top: 35%;
  transform: translate(-50%);
  transition: all 0.3s ease-in-out;
  z-index: 1;
`;

const Model: React.FC<ModelProps> = ({ open = false, setIsOpen }) => {
  // Make the input a controlled input
  const [email, setEmail] = useState("");

  const isValidEmail = (email: string) => {
    // Add your email validation logic here
    return email.includes("@") && email.includes(".") && email.length > 5;
  };

  const handelSubmit = () => {
    window.open(
      "mailto:fsmeltzer3@gmail.com?subject=Request%20Access%20to%20Private%20Repo&body=Please%20provide%20your%20email%20to%20request%20access%20to%20the%20private%20repository:"
    );
    setIsOpen(false);
  }

  return (
    open &&
    createPortal(
      <ModelContainer>
        {/* Add your model content here */}
        <div
          style={{ display: "flex", flexDirection: "column", padding: "4px" }}
        >
          <h1 style={{ paddingBottom: "8px" }}>Private Repo</h1>
          <p style={{ paddingBottom: "4px" }}>Please request Access</p>
          <form style={{ display: "flex" }} onSubmit={e => e.preventDefault()}>            
            <input
              style={{ padding: "8px" }}
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && isValidEmail(email)) {
                  handelSubmit();
                }}}
            />
            <button
              disabled={!isValidEmail(email)}
              style={{
                padding: "0 4px",
                border: "none",
                color: "black",
                backgroundColor: !isValidEmail(email) ? "grey" : "gold",
                marginLeft: "8px",
              }}
              type="button"
              onClick={handelSubmit}
            >
              Request
            </button>
          </form>
          <button
            style={{
              position: "absolute",
              width: "32px",
              height: "32px",
              top: 24,
              right: 24,
            }}
            onClick={() => {
              setIsOpen(false);
            }}
          >
            X
          </button>
        </div>
      </ModelContainer>,
      document.body
    )
  );
};

export default Model;
