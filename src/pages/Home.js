
import React from 'react'
import MainFeaturedPost from '../components/MainFeaturedPost';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Karuzela from '../components/carousel';
import FeaturedPost from '../components/FeaturedPost';

import post1 from './blog-post.1.md';
import post2 from './blog-post.2.md';
import post3 from './blog-post.3.md';


const mainFeaturedPost = {
  title: 'Wisconsin animal shelter',
  description:
    "Wisconsin animal shelter flooded by ‘hundreds’ of offers to adopt dogs who survived plane crash",
  image: 'https://placedog.net/500',
  imageText: 'main image description',
  linkText: 'Continue reading…',
  href: 'https://www.independent.co.uk/news/world/americas/wisconsin-dogs-plane-crash-adopt-b2225962.html',
};

const featuredPosts = [
  {
    title: 'Lorem ipsum',
    date: 'Nov 12',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce cursus rhoncus aliquet. Quisque congue aliquam risus, non dictum justo malesuada non',
    image: 'https://placedog.net/444',
    imageLabel: 'Image Text',
  },
  {
    title: 'Lorem ipsum',
    date: 'Nov 11',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce cursus rhoncus aliquet. Quisque congue aliquam risus, non dictum justo malesuada non',
    image: 'https://placedog.net/343',
    imageLabel: 'Image Text',
  },
];

const posts = [post1, post2, post3];
function Home() {
  return (
    <div>
      
           <Karuzela/>
          
      <Container maxWidth="lg">
        
        <main>
        <div class="container pt-5 pb-3 px-lg-5 mb-5">
        <h1 class="mb-5">Current Affairs</h1>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          </div>
        </main>
      </Container>
  </div>
  )
}



export default Home
