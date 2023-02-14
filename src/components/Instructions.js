import React from 'react';
const Instructions = () => {
  return (
    <div className='instructions'>
      <h1>WaterWitch </h1>
      <span>
        Wiccan Rede, an ethical code that states, “If it harm none, do what you
        will,”
      </span>
      <br />
      <ul>
        {' '}
        <li>
          * If you are using a private water source, get the number on the door
          for the super.
        </li>
        <br />
        <li>
          * explain what you'd like to do, show them you have the right size
          water key, and offer something in return.{' '}
        </li>
        <br />
        <li>
          * Examples: if you don't have a few bucks, offer to help take the
          trash out or hose the sidewalk, etc.
        </li>
        <br />
        <li>
          {' '}
          * If it's a non-profit, I ask if someone is around and offer a hand.
          They are excempt from water bills, so tend to be a bit more generous.
        </li>
        <br />
        <li>
          * Public watersources like fill stations, Public Schools, absolutely
          ask what the best time is and when the kids are not there.{' '}
        </li>
        <br />
        <li>
          It will only take me one complaint, which I'll follow up on, before
          this becomes another app you need to have an account for.{' '}
        </li>
        <br />
        <li>
          folks have to contact me for an account.
          <li>
            This will give me access to your location and other relevant info
            that is none of my business, <br></br>which I will use to keep track
            of who is using my app, what water sources they are near, interested
            in, so on.
          </li>{' '}
          I don't need this to go viral, but I'd like people to get help from
          it, so please be respectful and don't put me in a position to make a
          simple, public app more complicated and private than it has to be.
        </li>
        <br />
        <li>
          {' '}
          <li>
            Please use the correct size water key. <br></br>They are anywhere
            from $1-8 Dollars. Please do not use pliers and strip the valve
            stems. <br></br>Please use the form to add dependable water-sources
            that you vet.
          </li>{' '}
          <br></br>
          <span>Thank you for any dousing you do!</span>
        </li>
      </ul>
      <br />
      <h3>Link to a common water key</h3>
      <a href='https://www.homedepot.com/p/DANCO-5-16-in-Sillcock-Key-80132/300754237?source=shoppingads&locale=en-US&srsltid=Ad5pg_F64O-0nudNoELPfkPhe8JyAIfoogLi2s25PwPYAFMZ6974fE82sX4'>
        {' '}
        Nope, I'm not making a profit if you click on this!
      </a>
    </div>
  );
};

export default Instructions;
