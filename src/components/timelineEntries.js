import React from "react";

const timelineEntries = [
  {
    title: "The Power of Computer Science",
    unit: "General",
    date: "9/21/20",
    startOfUnit: true,
    content: (
      <p>
        <b>Computer science is a massive field,</b> ranging from data science
        and machine learning to cybersecurity. Whether you're interested in
        making AIs to beat your favorite game or devising cryptographic schemes
        to secure network connections, computer science has something for you.
        <br />
        <br />
        Activity: AI, Processing, Capture The Flag (CTF) and web dev demos.
      </p>
    ),
  },
  {
    title: "Intro to Algorithms",
    unit: "Algorithms",
    date: "9/21/20",
      startOfUnit: true,
    content: (
      <p>
        <b>Motivation behind the study of algorithms and big O analysis.</b>
        <br />
        <br />
        Activity: Fibonacci recursion analysis and knapsack example.
      </p>
    ),
  },
  {
    title: "Arrays and Sorting",
    unit: "Algorithms",
    date: "9/28/20",
    content: (
      <p>
        <b>Clever manipulations of arrays and basic data structures.</b>
        <br />
        <br />
        Demo: Visualization of different sorting methods.
      </p>
    ),
  },
  {
    title: "Intro to Graph Theory",
    unit: "Algorithms",
    date: "10/12/20",
    content: (
      <p>
        <b>
          Real-world applications of graph theory and important terminology.
        </b>
        <br />
        <br />
        Activity: Seven bridges of Konigsburg.
      </p>
    ),
  },
  {
    title: "Stacks, Queues, BFS and DFS",
    unit: "Algorithms",
    date: "10/19/20",
    content: (
      <p>
        <b>
          Mechanisms underlying stacks and queues and their applications in
          graph traversals.
        </b>
        <br />
        <br />
        Demo: Generating all permutations, Processing floodfill demo.
      </p>
    ),
  },
  {
    title: "Greedy Algorithms",
    unit: "Algorithms",
    date: "10/26/20",
    content: (
      <p>
        <b>Examples of greedy strategies and their application in Kruskal's MST algorithm.</b>
        <br />
        <br />
        Demo: Kruskal's visualization.
      </p>
    ),
  },
  {
    title: "Dynamic Programming",
    unit: "Algorithms",
    date: "11/2/20",
    content: (
      <p>
        <b>Using memoization to speed up code.</b>
        <br />
        <br />
        Activity: Revisiting knapsack.
      </p>
    ),
  },
  {
    title: "Introduction to Web Development",
    unit: "Web Development",
    date: "11/9/2020",
    startOfUnit: true,
    content: (
      <p>
        <b>Tools and libraries needed to make stylish interactive websites.</b>
        <br />
        <br />
        Activity: React.js animations.
      </p>
    ),
  },
  {
    title: "Systems Unit Start",
    unit: "Systems",
    date: "m/dd/yy",
    startOfUnit: true,
    content: (
      <p>
        <b>Your computer is powerful.</b> Of course, it can be used to play
        video games or surf the web, but by learning about its inner workings
        you can <b>learn how to host virtual machines and web servers</b>, share
        files instantaneously with your friends, and create real-time
        multiplayer games.
      </p>
    ),
  },
  {
    title: "Cybersecurity Unit Start",
    unit: "Cybersecurity",
    date: "m/dd/yy",
    startOfUnit: true,
    content: (
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis in
        necessitatibus nulla eius id velit dolores tempore aut recusandae esse.
      </p>
    ),
  },
];

export default timelineEntries;