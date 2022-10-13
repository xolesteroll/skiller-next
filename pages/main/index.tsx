import React from 'react';
import Sidebar from "../../components/ui/Sidebar/Sidebar";
import s from "../../styles/Feed.module.scss";
import GridWrapper from "../../components/ui/GridWrapper/GridWrapper";
import FeedNav from "../../components/navigation/FeedNav/FeedNav";
import feedData from "../../data/feed"
import Card from "../../components/ui/Card/Card";

const Feed = () => {
    return (
        <GridWrapper>
            <Sidebar>
                <FeedNav/>
            </Sidebar>
            <div className={s.feed}>
                {feedData.map((f, i) => {
                    return <Card key={f.text + i}>
                        <p>
                            {f.text}
                        </p>
                    </Card>
                })}
            </div>
        </GridWrapper>
    );
};

export default Feed;