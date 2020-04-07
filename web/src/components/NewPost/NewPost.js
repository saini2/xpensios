import React from 'react';
import s from "./NewPost.module.scss";
import Person from "../../images/man.jpeg";
import PostContent from  "../PostContent/PostContent";
export default class NewPost extends React.PureComponent {
state = {
    titleData: null,
    postData: null,
}
   render(){
    return(
        <>
        <div className = {s.background} >
            <div className = {s.outer}>
                <span>
                Immateapot
                </span>
                <span>
                    Publish
                </span>
                <img src = {Person} className = {s.personImage}></img>
            </div>
            <div className={s.outer2}>
              <input
                placeholder={'Title'}
                onChange={e => {
                }}
                name={'search'}
                value={this.state.titleData && this.state.titleData}
                autoFocus
                autoComplete={'off'}
                id={'searchInput'}
              />
            </div>
            {/* <PostContent></PostContent> */}
        </div>
        </>
    );
   }
}