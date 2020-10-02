import {isEmpty} from 'lodash';
import Post from "../post";

const Posts = ({posts}) => {

	if ( isEmpty(posts) ) {
		return null;
	}

	return (
		<div className="flex flex-wrap -mb-4">
			{
				( posts?.edges ?? []).map((post) => {
					return (
						<div className="w-1/3 mb-4 px-2">
							<Post key={post?.node?.id ?? ""} post={post.node}/>
						</div>
					);
				})
			}
		</div>
	)
}

export default Posts


