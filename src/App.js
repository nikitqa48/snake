import React, {Component} from "react"
import Snake from "./components/Snake";
import Food from "./components/Food";

const LEFT  = 37; 
const UP    = 38;
const RIGHT = 39; 
const DOWN  = 40;
const STOP  = 32; 


const getRandom = () => {
  let min = 1;
  let max = 98;
  let x = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
  let y = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
  return [x, y];
};


const initial_state = {
    snake: [[0, 0], [0, 2]],
    food: getRandom(),
    direction: STOP,
    mode: 'stop',
    score: 0,
    prev_scores: [],
    speed: 100
}


class App extends Component {
    state = initial_state

    componentDidMount() {
        setInterval(this.moveSnake, this.state.speed);
        document.onkeydown = this.onKeyDown;
        document.title = "snake-game";
    }

    componentDidUpdate() {
        this.onSnakeOutOfBounds();
        this.onSnakeCollapsed();
        this.snakeEat();
      }
    
    onKeyDown = (e:any) => {
        e = e || window.event;
        
        switch (e.keyCode){
            case LEFT:
                this.setState({mode:'game'})
                this.setState({ direction: LEFT });
                break;
            case UP:
                this.setState({mode:'game'})
                this.setState({ direction: UP });
                break;
            case RIGHT:
                this.setState({mode:'game'})
                this.setState({ direction: RIGHT });
                break;
            case DOWN:
                this.setState({mode:'game'})
                this.setState({ direction: DOWN });
                break;
            case STOP:
                this.setState({mode:'stop'})
                this.setState({direction: STOP})
                break;
        }
    }

    moveSnake = () => {
        let body = [...this.state.snake]
        let head = body[body.length - 1]
 
          switch(this.state.direction){
            case LEFT:
              head = [head[0]-2, head[1]]
              break;
            case RIGHT:
              head = [head[0]+2, head[1]]
              break;
            case UP:
              head = [head[0], head[1]-2]
              break;
            case DOWN:
              head = [head[0], head[1]+2]
              break;
            case STOP:
              break;
        }
        body.push(head)
        body.shift()
        this.setState({
          snake:body
        })
    }   

    onSnakeOutOfBounds() {
        let head = this.state.snake[this.state.snake.length - 1];
          if (head[0] >= 100 || head[1] >= 100 || head[0] < 0 || head[1] < 0 && this.state.mode === 'game') {
            this.gameOver()
          }
      }

    onSnakeCollapsed() {
        let snake = [...this.state.snake];
        let head = snake[snake.length - 1];
        let mode = this.state.mode
        snake.pop();
        snake.forEach(dot => {
          if (head[0] == dot[0] && head[1] == dot[1]) {
            if (mode === 'game'){
              this.gameOver()
            }
            this.setState(initial_state);
            // this.gameOver();
          }
        });
      }

    snakeEat(){
        let head = this.state.snake[this.state.snake.length - 1];
        let food = this.state.food;
        let count_score = this.state.score
        if (head[0] == food[0] && head[1] == food[1]) {
          count_score += 10
          this.setState({
            food: getRandom(),
            score: count_score
          });
          this.increaseSnake();
          this.increaseSpeed();
        }
    }

    gameOver(){
      alert('game over')
      let scores = this.state.prev_scores
      scores.push(this.state.score)
      this.setState(initial_state);
    }

    increaseSnake() {
        let newSnake = [...this.state.snake];
        newSnake.unshift([]);
        this.setState({
          snake: newSnake
        });
      }
    
      increaseSpeed() {
        if (this.state.speed > 10) {
          this.setState({
            speed: this.state.speed - 20
          });
        }
      }

    render(): React.ReactNode {
      const {  snake, food } = this.state;
        return (
            <div>
              <h1 className={'score'}>score {this.state.score}</h1>
              <div className="game-area">
                <Snake snakeDots={snake} />
                <Food dot={food} />
              </div>
              <div className={'score'}>prev game points 
                {
                  this.state.prev_scores.map((score, key) => (
                    <div className="column score">
                       {score}
                      </div>
                  ))
                }
              </div>
            </div>
      );
    }
}

export default App
