import { FC, Fragment } from "react";

const Link: FC = () => {
  return (
    <Fragment>
      <h3>Other Links</h3>
      <ul>
        <li>
          <a href="faq">FAQ</a>
        </li>
        <li>
          <a href="contact">Contact Us</a>
        </li>
        <li>
          <a href="support">Support</a>
        </li>
        <li>
          <a href="private-policy">Private Policy</a>
        </li>
        <li>
          <a href="terms">Terms and Conditions</a>
        </li>
      </ul>
    </Fragment>
  );
};

export default Link;
