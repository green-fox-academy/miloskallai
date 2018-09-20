CREATE TABLE posts
(
  ID INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(500),
  url VARCHAR(250),
  created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  score INT DEFAULT 0,
  PRIMARY KEY(ID)
  );

  INSERT INTO posts(title, url) VALUES ('Test Post', 'http://vice.com');