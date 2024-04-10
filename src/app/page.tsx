import FeedContainer from 'components/feed-container';
import PostsListRSC from 'components/posts-list/posts-list-rsc';
import FeedHeader from 'components/feed-header';

const Feed = () => {
  return (
    <>
      <FeedContainer>
        <FeedHeader />
        <PostsListRSC />
      </FeedContainer>
    </>
  );
};

export default Feed;
