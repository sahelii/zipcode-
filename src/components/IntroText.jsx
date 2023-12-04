import React from "react";

const IntroText = () => {
  return (
    <div className="my-6">
      <p className="py-4">
      In India, the postal system is organized by the India Post, and it classifies 
      the nation into various regions. The initial digits of the postal code correspond
       to these regions. The second and third digits, when combined with the first, 
       denote the specific shipping districts for the purpose of outbound sorting. 
       The ultimate three digits of the postal code indicate the precise delivery 
       location within the designated district.
      </p>
      <p className="py-4">
       Each primary post office across the 28 states and 8 Union Territories is
        designated with the suffix number or code 001. For instance, the main post 
        office in Connaught Place, New Delhi, carries the postal code 110001.
         The postal codes in India follow a systematic pattern, with the lowest
          code identified as 110001 for Connaught Place in Delhi, and the highest 
          code recorded, such as 999999, representing specific regions like Andaman 
          and Nicobar Islands or Lakshadweep. This structured postal coding system 
          ensures efficient sorting and delivery services across the diverse geographical 
          landscape of India.
      </p>
    </div>
  );
};

export default IntroText;
