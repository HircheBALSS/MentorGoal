import React from 'react';
import { use } from 'react';

// async function getArticle(articleID) {
//     const res = await fetch(`/articles/${articleID}`);
// if (!res.ok) {
//     throw new Error('Failed to fetch data');
// }
//     const article = await res.json()
//     return article
//   }

type Props = {
  params: unknown;
};

const Article = ({ params }: Props) => {
  // const article = use(getArticle(params.articleID))
  //   console.log(article)
  return <div>Article</div>;
};

export default Article;
