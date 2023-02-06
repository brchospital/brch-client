import React from "react";
import "./style.css";

const AboutSection = () => {
  return (
    <div className="about-section-container">
      <h4 className="about-section-container-title">ჩვენ შესახებ</h4>
      <div className="about-section-container-info">
        <p className="about-section-container-text">
          <b>ბათუმის რესპუბლიკური კლინიკური საავადმყოფო</b> პაციენტებზე
          ორიენტირებული სამედიცინო ცენტრია.
        </p>
        <br />
        <p className="about-section-container-text">
          იგი აღჭურვილია <b>თანამედროვე აპარატურით</b>, კომფოტრული პალატებითა და
          საოპერაციო ბლოკებით. ჩვენს კლინიკაში მკურნალობა მიმდინარეობს უმაღლესი
          სტანდარტებით, საერთაშორისო პროტოკოლების გათვალსიწინებით.
        </p>
        <br />
        <p className="about-section-container-text">
          <b>საქმისადმი ერთგულება და მაღალი პროფესიონალიზმი</b> ჩვენი გუნდის
          მთავარი მახასიათებელია. კლინიკა ორიენტირებულია პაციენტების
          კმაყოფილებაზე.
        </p>
        <br />
        <p className="about-section-container-text">
          აქ მომუშავე თითოეული მიმართულების სპეიციალისი გამოირჩევა პაციენტების
          მიმართ განსაკუთრებული გულისხმიერებით. კომფორტული და მშვიდი გარემო,
          რომელიც აქ პაციენტებს ხვდებათ კიდევ ერთი მნიშვნელოვანი პუნქტია იმ
          მთავარი მიზნის მისაღწევად, რასაც მეტი კმაყოფილი და{" "}
          <b>გამოჯანმრთელებული პაციენტი</b> ქვია.
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
