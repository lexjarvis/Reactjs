// Create an App component that renders at least three tweets

function App() {
    return (
      <div>
        <Tweet
          name="John Smith"
          username="jsmith"
          date={new Date().toDateString()}
          message="Hello"
        />
        <Tweet
          name="Jane Doe"
          username="jdoe"
          date={new Date().toDateString()}
          message="Hi John Smith"
        />
        <Tweet
          name="Sally Sue"
          username="sally1"
          date={new Date().toDateString()}
          message="Twitter is my favorite app"
        />
      </div>
    );
  }
