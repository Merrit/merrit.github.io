---
title: 'Contact'
hide_table_of_contents: true
---

export const EmailForm = () => (
  <form
    action="https://formspree.io/f/mgepgaww"
    method="POST"
  >
  <div>
    <label>
      Your email:
      <input type="email" name="email" />
    </label>
    </div>
    <div>
    <p />
    <label>
      Your message:
      <textarea name="message"></textarea>
    </label>
    </div>
    <button type="submit">Send</button>
  </form>
);

<div className="content">

<br />

<EmailForm />

</div>
