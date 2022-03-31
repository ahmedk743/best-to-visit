import React, { useState } from "react";

import { useAuth } from "../contexts/AuthContext";

const Book = () => {
  const [booking, setBooking] = useState({
    restaurant: "Select Restaurant",
    branch: "",
    noOfPeople: 0,
    date: "",
    time: "",
  });

  const [errorHandling, setErrorHandling] = useState({
    isRestaurantTouched: false,
    isBranchTouched: false,
    isPeopleTouched: false,
    isDateTouched: false,
    isTimeTouched: false,
  });

  const {
    isRestaurantTouched,
    isBranchTouched,
    isPeopleTouched,
    isDateTouched,
    isTimeTouched,
  } = errorHandling;

  const { restaurant, branch, noOfPeople, date, time } = booking;

  const onInputChange = (e) => {
    setBooking({ ...booking, [e.target.name]: e.target.value });

    switch (e.target.name) {
      case "branch":
        if (branch === "") {
          setErrorHandling({ ...errorHandling, isBranchTouched: true });
        }
        break;
      case "noOfPeople":
        if (noOfPeople === 0) {
          setErrorHandling({ ...errorHandling, isPeopleTouched: true });
        }
        break;
      case "date":
        if (date === "") {
          setErrorHandling({ ...errorHandling, isDateTouched: true });
        }
        break;
      case "time":
        if (time === "") {
          setErrorHandling({ ...errorHandling, isTimeTouched: true });
        }
        break;
      case "restaurant":
        if (restaurant === "") {
          setErrorHandling({ ...errorHandling, isRestaurantTouched: true });
        }
        break;

      default:
        break;
    }
  };

  const [toggleDoneModal, setToggleDoneModal] = useState(false);

  const { user } = useAuth();

  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "5%",
        paddingBottom: "15%",
      }}
    >
      <p className="title">
        Welcome,{" "}
        <span style={{ textTransform: "capitalize" }}>{user.name}</span>
      </p>

      <div
        style={{
          padding: "7%",
          border: "1px solid #777",
          borderRadius: 30,
        }}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setToggleDoneModal(true);
          }}
        >
          <p className="title">Book your Table!</p>
          {/* Restaurant Name */}
          <div className="field is-horizontal">
            <div className="field-label is-normal">
              <label className="label">Restaurant</label>
            </div>
            <div className="field-body">
              <div className="field">
                <div className="control">
                  <div
                    className={`select is-fullwidth ${
                      restaurant === "Select Restaurant" &&
                      isRestaurantTouched &&
                      `is-danger`
                    } `}
                  >
                    <select
                      required
                      name="restaurant"
                      value={restaurant}
                      onChange={onInputChange}
                    >
                      <option>Select Restaurant</option>
                      <option>Burger Factory</option>
                      <option>Canoe</option>
                      <option>Adega Restaurante</option>
                      <option>Michael's On Simcoe</option>
                      <option>Grey Gardens</option>
                    </select>
                  </div>
                </div>
                {restaurant === "Select Restaurant" && (
                  <p className="help is-danger">This field is required</p>
                )}
              </div>
            </div>
          </div>

          {/* Branch */}
          <div className="field is-horizontal">
            <div className="field-label is-normal">
              <label className="label">Branch</label>
            </div>
            <div className="field-body">
              <div className="field">
                <div className="control">
                  <input
                    required
                    className={`input ${
                      branch === "" && isBranchTouched && `is-danger`
                    } `}
                    type="text"
                    placeholder="Branch"
                    name="branch"
                    value={branch}
                    onChange={onInputChange}
                  />
                </div>
                {branch === "" && (
                  <p className="help is-danger">This field is required</p>
                )}
              </div>
            </div>
          </div>

          {/* Time & People */}

          <div className="field is-horizontal">
            <div className="field-label is-normal">
              <label className="label">No of People</label>
            </div>
            <div className="field-body">
              <div className="field">
                <div className="control">
                  <input
                    required
                    className={`input ${
                      noOfPeople === 0 && isPeopleTouched && `is-danger`
                    } `}
                    type="number"
                    placeholder="No of People"
                    name="noOfPeople"
                    value={noOfPeople}
                    onChange={onInputChange}
                  />
                </div>
                {noOfPeople === 0 && (
                  <p className="help is-danger">This field is required</p>
                )}
              </div>
            </div>
          </div>
          <div className="field is-horizontal">
            <div className="field-label is-normal">
              <label className="label">Date</label>
            </div>
            <div className="field-body">
              <div className="field">
                <div className="control">
                  <input
                    required
                    className={`input ${
                      date === "" && isDateTouched && `is-danger`
                    } `}
                    type="date"
                    name="date"
                    value={date}
                    onChange={onInputChange}
                  />
                </div>
                {date === "" && (
                  <p className="help is-danger">This field is required</p>
                )}
              </div>
            </div>
          </div>
          <div className="field is-horizontal">
            <div className="field-label is-normal">
              <label className="label">Time</label>
            </div>
            <div className="field-body">
              <div className="field">
                <div className="control">
                  <input
                    required
                    className={`input ${
                      time === "" && isTimeTouched && `is-danger`
                    } `}
                    type="time"
                    name="time"
                    value={time}
                    onChange={onInputChange}
                  />
                </div>
                {time === "" && (
                  <p className="help is-danger">This field is required</p>
                )}
              </div>
            </div>
          </div>

          {/* Submit */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
            }}
          >
            <input className="button is-info" type="submit" naem="Submit" />
          </div>
        </form>
      </div>

      {toggleDoneModal && (
        <div class="modal is-active">
          <div class="modal-background"></div>
          <div class="modal-card">
            <header class="modal-card-head">
              <p class="modal-card-title">
                Your table has been booked successfully!
              </p>
              <button
                class="delete"
                aria-label="close"
                onClick={() => setToggleDoneModal(false)}
              ></button>
            </header>
            <section class="modal-card-body">
              <p className="title">Details</p>
              <div className="field is-horizontal">
                <div className="field-label">
                  <div className="label">Restaurant: </div>
                </div>
                <div className="field-body">
                  <div className="field">
                    <div className="control">{restaurant}</div>
                  </div>
                </div>
              </div>
              <div className="field is-horizontal">
                <div className="field-label">
                  <div className="label">Branch: </div>
                </div>
                <div className="field-body">
                  <div className="field">
                    <div className="control">{branch}</div>
                  </div>
                </div>
              </div>
              <div className="field is-horizontal">
                <div className="field-label">
                  <div className="label">No of People: </div>
                </div>
                <div className="field-body">
                  <div className="field">
                    <div className="control">{noOfPeople}</div>
                  </div>
                </div>
              </div>
              <div className="field is-horizontal">
                <div className="field-label">
                  <div className="label">Date: </div>
                </div>
                <div className="field-body">
                  <div className="field">
                    <div className="control">{date}</div>
                  </div>
                </div>
              </div>
              <div className="field is-horizontal">
                <div className="field-label">
                  <div className="label">Time: </div>
                </div>
                <div className="field-body">
                  <div className="field">
                    <div className="control">{time}</div>
                  </div>
                </div>
              </div>
            </section>
            <footer class="modal-card-foot">
              <button
                class="button is-info"
                onClick={() => setToggleDoneModal(false)}
              >
                OK
              </button>
            </footer>
          </div>
        </div>
      )}
    </section>
  );
};

export default Book;
