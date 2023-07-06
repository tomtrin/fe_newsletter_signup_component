import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SignupMain from "./SignupMain";

describe('SignupMain', () => {

  describe('with valid email submission', () => {
    beforeEach( () => {
      render(<SignupMain/>)
    })
    it('should show a signup success message', async () => {
      const emailInput = screen.getByRole("textbox");
      await userEvent.type(emailInput, "test@example.com");

      const submitButton = screen.getByRole("button");
      await userEvent.click(submitButton);

      const message = await screen.findByText("Thanks for subscribing!")
      expect(message).not.toBeNull()
    });

    it('should display submitted email address', async () => {
      const emailInput = screen.getByRole("textbox");
      await userEvent.type(emailInput, "test@example.com");

      const submitButton = screen.getByRole("button");
      await userEvent.click(submitButton);

      const email = await screen.findByText("test@example.com")
      expect(email).not.toBeNull()
    });

    it('should display form again when success card is dismissed', async () => {
      const emailInput = screen.getByRole("textbox");
      await userEvent.type(emailInput, "test@example.com");

      const submitButton = screen.getByRole("button");
      await userEvent.click(submitButton);

      const dismissButton = screen.getByRole("button");
      await userEvent.click(dismissButton);

      const header = await screen.findByText("Stay updated!")
      expect(header).not.toBeNull()
    });
  });

});