import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';
import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';

import Window from '../components/Window';
import Input from '../components/Input';
import Navbar from '../components/Navbar';

export type Todo = Readonly<{
  id: string;
  date: Date;
  task: string;
  done: boolean;
}>;

const Home: NextPage = () => {
  const [tasks, setTasks] = useState<Todo[]>([]);

  const addTask = (newTodo: Todo): void => {
    setTasks([...tasks, newTodo]);
  };

  return (
    <div className='max-w-2xl mx-auto my-10'>
      <Head>
        <title>Task Manager</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='favicon.ico' />
      </Head>
      <Input addTask={addTask} />
      {tasks.map((task) => (
        <Window key={task.id} {...task} />
      ))}
    </div>
  );
};

export default Home;
