import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  render(<CheckoutForm />);
});

test("form shows success message on submit with form details", () => {
  render(<CheckoutForm />);
  const firstName = screen.getByLabelText(/first Name:/i);

  const lastName = screen.getByLabelText(/Last Name:/i);

  const address = screen.getByLabelText(/Address/i);

  const city = screen.getByLabelText(/City/i);

  const state = screen.getByLabelText(/state:/i);

  const zip = screen.getByLabelText(/Zip:/i);

  const checkout = screen.getByRole("button");

  userEvent.type(firstName, "Jeremy");
  userEvent.type(lastName, "McCully");
  userEvent.type(address, "1234 Lane");
  userEvent.type(city, "RandomCity");
  userEvent.type(state, "AK");
  userEvent.type(zip, "92557");
  expect(screen.queryByTestId("successMessage")).not.toBeInTheDocument();
  userEvent.click(checkout);
  const successMsg = screen.queryByTestId("successMessage");
  expect(successMsg).toBeInTheDocument();

  const successName = screen.queryByText(/Jeremy McCully/i);
  expect(successName).toBeInTheDocument();

  const successAddressP1 = screen.queryByText(/1234 Lane/i);
  expect(successAddressP1).toBeInTheDocument();

  const successAddressP2 = screen.queryByText(/RandomCity, AK 92557/i);
  expect(successAddressP2).toBeInTheDocument();
});

/* test("proves the tests can fail", () => {
  render(<CheckoutForm />);
  expect(screen.queryByTestId("successMessage")).toBeInTheDocument();
});
 */
