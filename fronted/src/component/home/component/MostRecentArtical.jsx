// import React from 'react';
// import '../style/MostRecentArticals.css'; 
// import artical1 from '../images/articalimage1.jpg';
// import artical2 from '../images/articaksimage2.jpg';
// import artical3 from '../images/articalsimage3.jpg';
// import Button from '../../buttons/Button';


// const MostRecentArtical = () => {
//   const articles = [
//     {
//       id: 1,
//       image: artical1,
//       date: '12<br>April',
//       category: 'Selection',
//       title: 'The quality of life is determined by your books',
//     },
//     {
//       id: 2,
//       image: artical2,
//       date: '13<br>April',
//       category: 'Selection',
//       title: 'The best way to spend your Sunday afternoon',
//     },
//     {
//       id: 3,
//       image: artical3,
//       date: '21<br>April',
//       category: 'Mindset',
//       title: 'The most anticipated romance novels of 2021',
//     },
//   ];

//   return (
//     <section className="recent-articles py-5">
//       <div className="container">
//         <div className="section-heading">
//           <h2>Most Recent Articles</h2>
//         </div>
//         <div className="row g-4">
//           {articles.map((article) => (
//             <div key={article.id} className="col-md-4">
//               <div className="article-card position-relative">
//                 <img src={article.image} alt="Article Image" />
//                 <div className="article-date" dangerouslySetInnerHTML={{ __html: article.date }}></div>
//                 <div className="article-content">
//                   <div className="article-category">{article.category}</div>
//                   <div className="article-title">{article.title}</div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className='btn-wrap'>
//       <Button title="View Our Blog" />
//       </div>
//     </section>
//   );
// };

// export default MostRecentArtical;
import React from 'react';
import '../style/MostRecentArticals.css'; 
import artical1 from '../images/articalimage1.jpg';
import artical2 from '../images/articaksimage2.jpg';
import artical3 from '../images/articalsimage3.jpg';
import Button from '../../buttons/Button';
import { useNavigate } from "react-router-dom";

const MostRecentArtical = () => {
  const navigate = useNavigate();

  const articles = [
    { id: 1, image: artical1, date: '12<br>April', category: 'Selection', title: 'The quality of life is determined by your books' },
    { id: 2, image: artical2, date: '13<br>April', category: 'Selection', title: 'The best way to spend your Sunday afternoon' },
    { id: 3, image: artical3, date: '21<br>April', category: 'Mindset', title: 'The most anticipated romance novels of 2021' },
  ];

  return (
    <section className="recent-articles py-5">
      <div className="container">
        <div className="section-heading">
          <h2>Most Recent Articles</h2>
        </div>
        <div className="row g-4">
          {articles.map((article) => (
            <div key={article.id} className="col-lg-4 col-md-6 col-sm-12">
              <div className="article-card position-relative">
                <img src={article.image} alt="Article" />
                <div className="article-date" dangerouslySetInnerHTML={{ __html: article.date }}></div>
                <div className="article-content">
                  <div className="article-category">{article.category}</div>
                  <div className="article-title">{article.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='btn-wrap'>
        <Button title="View Our Blog" name="more" onClick={() => navigate("/blog")}/>
      </div>
    </section>
  );
};

export default MostRecentArtical;
