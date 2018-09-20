CREATE TABLE posts
(
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(500),
  url VARCHAR(250),
  timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  score INT DEFAULT 0,
  PRIMARY KEY(id)
  );

  INSERT INTO posts(title, url) VALUES ('Test Post', 'http://vice.com');

  INSERT INTO posts(title, url) VALUES ('Article about dogs', 'https://www.nytimes.com/topic/subject/dogs');

  INSERT INTO posts(title, url) VALUES ('Science and health news from Vox', 'https://www.vox.com/science-and-health');

  INSERT INTO posts(title, url) VALUES ('International news from Guardian', 'https://www.theguardian.com/international');

  INSERT INTO posts(title, url) VALUES ('Google news from The Verge', 'https://www.theverge.com/google');

  UPDATE MyTable SET displayorders=displayorders+1 WHERE displayorders>2

  UPDATE posts SET score = score + 1 WHERE id = 48;

  DELETE from posts WHERE id = 54;