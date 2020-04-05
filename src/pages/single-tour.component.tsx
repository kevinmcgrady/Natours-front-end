import React from "react";
import { Icon } from "../atomic/atoms/icon/icon.component";
import Cover from "../assets/images/tours/tour-1-cover.jpg";
import DisplayImageOne from "../assets/images/tours/tour-1-1.jpg";
import DisplayImageTwo from "../assets/images/tours/tour-1-2.jpg";
import DisplayImageThree from "../assets/images/tours/tour-1-3.jpg";
import UserImage from "../assets/images/users/user-4.jpg";
import LeadGuideImage from "../assets/images/users/user-7.jpg";
import GuideImage from "../assets/images/users/user-10.jpg";
import WhiteLogo from "../assets/images/logo-white.png";
import { Map } from "../atomic/molecules/map/map.component";

interface ISingleTourProps {}

const SingleTour: React.FC<ISingleTourProps> = () => {
  return (
    <>
      <section className="section-header">
        <div className="header__hero">
          <div className="header__hero-overlay">&nbsp;</div>
          <img className="header__hero-img" src={Cover} />
        </div>

        <div className="heading-box">
          <h1 className="heading-primary">
            <span>The Hill Walker</span>
          </h1>
          <div className="heading-box__group">
            <div className="heading-box__detail">
              <Icon className="heading-box__icon" iconName="icon-clock" />
              <span className="heading-box__text">10 days</span>
            </div>
            <div className="heading-box__detail">
              <Icon className="heading-box__icon" iconName="icon-map-pin" />
              <span className="heading-box__text">Miam, USA</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section-description">
        <div className="overview-box">
          <div>
            <div className="overview-box__group">
              <h2 className="heading-secondary ma-bt-lg">Quick facts</h2>
              <div className="overview-box__detail">
                <Icon className="overview-box__icon" iconName="icon-calendar" />
                <span className="overview-box__label">Next Date</span>
                <span className="overview-box__text">20th March</span>
              </div>
              <div className="overview-box__detail">
                <Icon
                  className="overview-box__icon"
                  iconName="icon-trending-up"
                />
                <span className="overview-box__label">Difficulty</span>
                <span className="overview-box__text">Difficult</span>
              </div>
              <div className="overview-box__detail">
                <Icon className="overview-box__icon" iconName="icon-user" />
                <span className="overview-box__label">Participants</span>
                <span className="overview-box__text">10 peopls</span>
              </div>
              <div className="overview-box__detail">
                <Icon className="overview-box__icon" iconName="icon-star" />
                <span className="overview-box__label">Rating</span>
                <span className="overview-box__text">5/5</span>
              </div>
            </div>
            <div className="overview-box__group">
              <h2 className="heading-secondary ma-bt-lg">Your tour guides</h2>
              <div className="overview-box__detail">
                <img className="overview-box__img" src={LeadGuideImage} />
                <span className="overview-box__label">Lead guide</span>
                <span className="overview-box__text">Miyah Myles</span>
              </div>
              <div className="overview-box__detail">
                <img className="overview-box__img" src={GuideImage} />
                <span className="overview-box__label">TOUR GUIDE</span>
                <span className="overview-box__text">Jennifer Hardy</span>
              </div>
            </div>
          </div>
        </div>
        <div className="description-box">
          <h2 className="heading-secondary ma-bt-lg">
            About The Hill Walker tour
          </h2>
          <p className="description__text">
            Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.
          </p>
          <p className="description__text">
            Irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>
      </section>
      <section className="section-pictures">
        <div className="picture-box">
          <img className="picture-box__img" src={DisplayImageOne} alt="" />
        </div>
        <div className="picture-box">
          <img className="picture-box__img" src={DisplayImageTwo} alt="" />
        </div>
        <div className="picture-box">
          <img className="picture-box__img" src={DisplayImageThree} alt="" />
        </div>
      </section>
      <Map
        locations={[
          {
            type: "Point",
            coordinates: [-116.214531, 51.417611],
            _id: "5c88fa8cf4afda39709c2954",
            description: "Banff National Park",
            day: 1,
          },
          {
            type: "Point",
            coordinates: [-118.076152, 52.875223],
            _id: "5c88fa8cf4afda39709c2953",
            description: "Jasper National Park",
            day: 3,
          },
          {
            type: "Point",
            coordinates: [-117.490309, 51.261937],
            _id: "5c88fa8cf4afda39709c2952",
            description: "Glacier National Park of Canada",
            day: 5,
          },
        ]}
      />
      <section className="section-reviews">
        <div className="reviews">
          <div className="reviews__card">
            <div className="reviews__avatar">
              <img className="reviews__avatar-img" src={UserImage} alt="" />
              <h6 className="reviews__user">AYLA CORNELL</h6>
            </div>
            <p className="reviews__text">
              Porttitor ullamcorper rutrum semper proin mus felis varius
              convallis conubia nisl erat lectus eget.
            </p>
            <div className="reviews__rating">
              <Icon
                iconClassName="reviews__star--active"
                iconName="icon-star"
                className="reviews__star"
              />
              <Icon
                iconClassName="reviews__star--active"
                iconName="icon-star"
                className="reviews__star"
              />
              <Icon
                iconClassName="reviews__star--active"
                iconName="icon-star"
                className="reviews__star"
              />
              <Icon
                iconClassName="reviews__star--active"
                iconName="icon-star"
                className="reviews__star"
              />
              <Icon
                iconClassName="reviews__star--active"
                iconName="icon-star"
                className="reviews__star"
              />
            </div>
          </div>
          <div className="reviews__card">
            <div className="reviews__avatar">
              <img className="reviews__avatar-img" src={UserImage} alt="" />
              <h6 className="reviews__user">AYLA CORNELL</h6>
            </div>
            <p className="reviews__text">
              Porttitor ullamcorper rutrum semper proin mus felis varius
              convallis conubia nisl erat lectus eget.
            </p>
            <div className="reviews__rating">
              <Icon
                iconClassName="reviews__star--active"
                iconName="icon-star"
                className="reviews__star"
              />
              <Icon
                iconClassName="reviews__star--active"
                iconName="icon-star"
                className="reviews__star"
              />
              <Icon
                iconClassName="reviews__star--active"
                iconName="icon-star"
                className="reviews__star"
              />
              <Icon
                iconClassName="reviews__star--active"
                iconName="icon-star"
                className="reviews__star"
              />
              <Icon
                iconClassName="reviews__star--active"
                iconName="icon-star"
                className="reviews__star"
              />
            </div>
          </div>
          <div className="reviews__card">
            <div className="reviews__avatar">
              <img className="reviews__avatar-img" src={UserImage} alt="" />
              <h6 className="reviews__user">AYLA CORNELL</h6>
            </div>
            <p className="reviews__text">
              Porttitor ullamcorper rutrum semper proin mus felis varius
              convallis conubia nisl erat lectus eget.
            </p>
            <div className="reviews__rating">
              <Icon
                iconClassName="reviews__star--active"
                iconName="icon-star"
                className="reviews__star"
              />
              <Icon
                iconClassName="reviews__star--active"
                iconName="icon-star"
                className="reviews__star"
              />
              <Icon
                iconClassName="reviews__star--active"
                iconName="icon-star"
                className="reviews__star"
              />
              <Icon
                iconClassName="reviews__star--active"
                iconName="icon-star"
                className="reviews__star"
              />
              <Icon
                iconClassName="reviews__star--active"
                iconName="icon-star"
                className="reviews__star"
              />
            </div>
          </div>
          <div className="reviews__card">
            <div className="reviews__avatar">
              <img className="reviews__avatar-img" src={UserImage} alt="" />
              <h6 className="reviews__user">AYLA CORNELL</h6>
            </div>
            <p className="reviews__text">
              Porttitor ullamcorper rutrum semper proin mus felis varius
              convallis conubia nisl erat lectus eget.
            </p>
            <div className="reviews__rating">
              <Icon
                iconClassName="reviews__star--active"
                iconName="icon-star"
                className="reviews__star"
              />
              <Icon
                iconClassName="reviews__star--active"
                iconName="icon-star"
                className="reviews__star"
              />
              <Icon
                iconClassName="reviews__star--active"
                iconName="icon-star"
                className="reviews__star"
              />
              <Icon
                iconClassName="reviews__star--active"
                iconName="icon-star"
                className="reviews__star"
              />
              <Icon
                iconClassName="reviews__star--active"
                iconName="icon-star"
                className="reviews__star"
              />
            </div>
          </div>
          <div className="reviews__card">
            <div className="reviews__avatar">
              <img className="reviews__avatar-img" src={UserImage} alt="" />
              <h6 className="reviews__user">AYLA CORNELL</h6>
            </div>
            <p className="reviews__text">
              Porttitor ullamcorper rutrum semper proin mus felis varius
              convallis conubia nisl erat lectus eget.
            </p>
            <div className="reviews__rating">
              <Icon
                iconClassName="reviews__star--active"
                iconName="icon-star"
                className="reviews__star"
              />
              <Icon
                iconClassName="reviews__star--active"
                iconName="icon-star"
                className="reviews__star"
              />
              <Icon
                iconClassName="reviews__star--active"
                iconName="icon-star"
                className="reviews__star"
              />
              <Icon
                iconClassName="reviews__star--active"
                iconName="icon-star"
                className="reviews__star"
              />
              <Icon
                iconClassName="reviews__star--active"
                iconName="icon-star"
                className="reviews__star"
              />
            </div>
          </div>
          <div className="reviews__card">
            <div className="reviews__avatar">
              <img className="reviews__avatar-img" src={UserImage} alt="" />
              <h6 className="reviews__user">AYLA CORNELL</h6>
            </div>
            <p className="reviews__text">
              Porttitor ullamcorper rutrum semper proin mus felis varius
              convallis conubia nisl erat lectus eget.
            </p>
            <div className="reviews__rating">
              <Icon
                iconClassName="reviews__star--active"
                iconName="icon-star"
                className="reviews__star"
              />
              <Icon
                iconClassName="reviews__star--active"
                iconName="icon-star"
                className="reviews__star"
              />
              <Icon
                iconClassName="reviews__star--active"
                iconName="icon-star"
                className="reviews__star"
              />
              <Icon
                iconClassName="reviews__star--active"
                iconName="icon-star"
                className="reviews__star"
              />
              <Icon
                iconClassName="reviews__star--active"
                iconName="icon-star"
                className="reviews__star"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="section-cta">
        <div className="cta">
          <div className="cta__img cta__img--logo">
            <img src={WhiteLogo} alt="" />
          </div>
          <img
            className="cta__img cta__img--1"
            src={DisplayImageThree}
            alt=""
          />
          <img className="cta__img cta__img--2" src={DisplayImageOne} alt="" />
          <div className="cta__content">
            <h2 className="heading-secondary">What are you waiting for?</h2>
            <p className="cta__text">
              10 days. 1 adventure. Infinite memories. Make it yours today!
            </p>
            <button className="btn btn--green span-all-rows" id="book-tour">
              Book tour now!
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleTour;
