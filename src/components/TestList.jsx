import React from 'react';
import { Link } from 'react-router-dom';
import { Container, List, ListItem, ListItemText } from '@mui/material';

const TestList = () => {
  const tests = [
    //   { name: 'RandomTest', path: '/test/RandomTest' },
    { name: 'Aptitude Test 1', path: '/test/1' },
    // { name: 'Aptitude Test 2', path: '/test/2' },
    // { name: 'Aptitude Test 3', path: '/test/3' },
    // { name: 'Aptitude Test 4', path: '/test/4' },
    // { name: 'Aptitude Test 5', path: '/test/5' },
    // { name: 'Aptitude Test 6', path: '/test/6' },
    // { name: 'Aptitude Test 7', path: '/test/7' },
    // { name: 'Aptitude Test 8', path: '/test/8' },
    // { name: 'Aptitude Test 9', path: '/test/9' },
    // { name: 'Aptitude Test 10', path: '/test/10' },
    // Add other tests similarly
  ];

  return (
    <Container>
      <List>
        {tests.map((test, index) => (
          <ListItem button component={Link} to={test.path} key={index}>
            <ListItemText primary={test.name} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default TestList;
