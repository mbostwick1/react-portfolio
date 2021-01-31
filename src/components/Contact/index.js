import React from "react";
import "./style.css";

function Contact() {
  return (
    <>
      <form id="form">
      <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  id="formGroupExampleInput"
                  placeholder="Name"
                />
              </div>
              <br />
              <div class="form-group">
                <input
                  type="email"
                  class="form-control"
                  id="formGroupExampleInput2"
                  placeholder="Email"
                />
              </div>
              <br />
              <div class="form-group">
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="Message"
                ></textarea>
              </div>
              <br />
              <div class="d-flex justify-content-center">
              <button type="submit" class="btn btn-primary btn-lg">
                Submit
              </button>
            </div>
            </form>
    </>  
    );
}

export default Contact;
