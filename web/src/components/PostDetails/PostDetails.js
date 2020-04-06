import React from "react";
import s from "./PostDetails.module.scss";
import Person from "../../images/man.jpeg";
import desImage from "../../images/codeimage.png";
import { FaTwitter, FaLinkedin, FaFacebook } from "react-icons/fa";

export default class PostDetails extends React.PureComponent {
  render() {
    return (
      <div className={s.outer}>
        <div>
          <img src={desImage} className={s.desimage}></img>
        </div>
        <div className={s.heading}>
          If you’re a startup, you should not use React (reflecting on the BSD +
          patents license)
        </div>
        <div className={s.outer}>
          <div>
            <img className={s.imageAuther} src={Person}></img>
          </div>
          <div className={s.auther}>
            <div className={s.autherName}>
              <span>Dan Abramov</span>
            </div>
            <div className={s.time}>
              <spna>Oct 30, 2018</spna>
              <span> . ☕️☕️☕️</span>
              <span>11 min read</span>
            </div>
          </div>
        </div>
        <div className={s.icons}>
          <FaTwitter size={20} />
          <FaLinkedin size={20} />
          <FaFacebook size={20} />
        </div>
        <div className={s.content}>
          Note 2: August 20th 13.00 BST— please don’t turn this into a flamewar.
          Open Source Software has a >30 year history, and Facebook appears to
          be leveraging it as an instrument for their private benefit. Note 3:
          August 20th 19.00 BST — I’ve received comments from individuals
          associated with the React universe. Contrary to them, I have no vested
          interest in one frontend framework or another. I am a backend
          engineer, not a frontend guy. As a result, I’m neutral and unbiased in
          this sense. I am not attacking the technology — I’m just providing my
          view on Facebook’s stance and its potential impact. Note 4: August
          20th 21.20 BST — I’ve compiled a list of ~35 companies along with
          their most popular Open Source projects (75+ in total), grouped by the
          licenses they use. The conclusion is that Facebook is nearly alone in
          the industry in the use of this license. Here is the article.Note 2:
          August 20th 13.00 BST— please don’t turn this into a flamewar. Open
          Source Software has a >30 year history, and Facebook appears to be
          leveraging it as an instrument for their private benefit. Note 3:
          August 20th 19.00 BST — I’ve received comments from individuals
          associated with the React universe. Contrary to them, I have no vested
          interest in one frontend framework or another. I am a backend
          engineer, not a frontend guy. As a result, I’m neutral and unbiased in
          this sense. I am not attacking the technology — I’m just providing my
          view on Facebook’s stance and its potential impact. Note 4: August
          20th 21.20 BST — I’ve compiled a list of ~35 companies along with
          their most popular Open Source projects (75+ in total), grouped by the
          licenses they use. The conclusion is that Facebook is nearly alone in
          the industry in the use of this license. Here is the article.
        </div>
      </div>
    );
  }
}
