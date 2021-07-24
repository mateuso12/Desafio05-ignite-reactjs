import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { RichText } from 'prismic-dom';
import { FiCalendar, FiClock, FiUser } from 'react-icons/fi';

import { getPrismicClient } from '../../services/prismic';
import Prismic from '@prismicio/client';

import commonStyles from '../../styles/common.module.scss';
import styles from './post.module.scss';
import { useRouter } from 'next/router';
import Header from '../../components/Header';

interface Post {
  first_publication_date: string | null;
  data: {
    title: string;
    banner: {
      url: string;
    };
    author: string;
    content: {
      heading: string;
      body: {
        text: string;
      }[];
    }[];
  };
}

interface PostProps {
  post: Post;
}

export default function Post({post}: PostProps) {
  const router = useRouter();

  if(router.isFallback) {
    return <div>Carregando...</div>
  }

  return (
    <>
    <Head>
      <title> post.data.title | spacetraveling </title>
    </Head>
      <Header /> 
      <img src="/images/imagem1.png" alt="banner" className={styles.banner}/>

    <main className={commonStyles.container}>
      <div >
        <div className={styles.postTop}>
        <h1>post.data.title</h1>
        <ul>
          <li>
            <FiCalendar />
            23 Jul 2021
          </li>
          <li>
            <FiUser />
            Mateus Sousa
          </li>
          <li>
            <FiClock />
            4 min
          </li>
        </ul>
        </div>

        <article className={styles.post}>
          <h2>Titulo seção</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat voluptatibus quisquam perspiciatis accusantium architecto cumque dolor enim corrupti sed! Atque totam odio recusandae iste unde sequi neque aliquam! Corrupti veniam ab animi rem itaque impedit similique ratione repudiandae, illo nobis est quis harum quos laudantium ea hic cum explicabo natus, nihil iusto deserunt illum? Animi quis aliquid rem neque nulla facere tempora, expedita commodi necessitatibus nemo illum ipsum obcaecati reprehenderit repellendus molestiae quae? Molestiae ut tenetur aliquid eum odio doloremque!</p>
        </article>
      </div>
    </main>
    </>
  )
}

// export const getStaticPaths = async () => {
//   const prismic = getPrismicClient();
//   const posts = await prismic.query([Prismic.Predicates.at('document.type', 'posts')]);

//   const paths = posts.results.map(post => {
//     return {
//       params: {
//         slug: post.uid
//       }
//     }
//   })

//   return { 
//     paths,
//     fallback: true
//   }
// };

// export const getStaticProps = async ({params}) => {
//   const { slug } = params;

//   const prismic = getPrismicClient();
//   const response = await prismic.getByUID('post', String(slug), {});
//   const post = {
//     uid: response.uid,
//     first_publication_date: RichText.asText(response.first_publication_date),
//     data: {
//       title: RichText.asText(response.data.title),
//       subtitle: RichText.asText(response.data.subtitle),
//       author: RichText.asText(response.data.author),
//       banner: {
//         url: RichText.asText(response.data.banner.url),
//       },
//       content: RichText.asHtml(response.data.content).map(content => {
//         return {
//           heading: content.heading,
//           body: [...content.body]
//     }
//       })
//     }
//   }

//   return { 
//     props: {
//       post
//     },
//     redirect: 60 * 30 //30 minutes
//   }
// };
