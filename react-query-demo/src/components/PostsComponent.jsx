// src/components/PostsComponent.jsx
import React from 'react';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const fetchPosts = async () => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return data;
};

const PostsComponent = () => {
  const {
    data: posts,
    isLoading,
    isError,
    error,
    isFetching,
  } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
    staleTime: 1000 * 60 * 5, // ✅ data considered fresh for 5 minutes
    cacheTime: 1000 * 60 * 10, // ✅ unused data kept in cache for 10 minutes
    refetchOnWindowFocus: true, // ✅ refetch when window gains focus
    keepPreviousData: true, // ✅ keeps previous data during background refetch
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Posts</h2>
      {isFetching && <p style={{ fontStyle: 'italic' }}>Refreshing data...</p>}
      <ul>
        {posts?.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;
