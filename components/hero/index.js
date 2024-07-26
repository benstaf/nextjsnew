import React from 'react';

export default () => (
  <section className="header" id="hero">
    <div className="header__text-box">
      <h1>The Tech & Medicine Hub</h1>
      <p>
        ReyzHub is a global network for Tech and Medicine startups, to fundraise and do business
      </p>

<a href="/sign_up"  target="_blank" >

      <button type="button" className="btn btn-rounded-big">
        Sign Up
      </button>
</a>


    </div>
    <div className="header__draw">
      <img
        src="./assets/world.svg"
        alt="illustration"
      />
    </div>
  </section>
);
