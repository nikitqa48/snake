// const LEFT  = 37; 
// const UP    = 38;
// const RIGHT = 39; 
// const DOWN  = 40;
// const STOP  = 32; 
// const height = 10;
// const width = 10;

// const emptyTable = () => {
//     const grid_count = 10
//     const grid = []
//     for (let i = 0; i < grid_count; i ++){
//         for (let j = 0; j < grid_count; j ++){
//             grid.push(<div className="cell"  />)
//         }
//     }
//     return grid
// }

// const initial_state = {
//     rows: emptyTable(),
//     snake: [[0, 0], [0, 2]],
//     food: getRandom(),
//     direction: STOP,
//     speed: 100
// }

// class Snake extends Component {
//     state = initial_state

//     componentDidMount() {
//         setInterval(this.moveSnake, this.state.speed);
//         document.onkeydown = this.onKeyDown;
//         document.title = "snake-game";
//     }

//     componentDidUpdate() {
//         this.onSnakeOutOfBounds();
//         this.onSnakeCollapsed();
//         this.snakeEat();
//       }
    
//     onKeyDown = (e:any) => {
//         e = e || window.event;
//         switch (e.keyCode){
//             case 37:
//                 this.setState({ direction: LEFT });
//                 break;
//             case 38:
//                 this.setState({ direction: UP });
//                 break;
//             case 39:
//                 this.setState({ direction: RIGHT });
//                 break;
//             case 40:
//                 this.setState({ direction: DOWN });
//                 break;
//         }
//     }

//     moveSnake = () => {
//         let body = [...this.state.snake]
//         let head = body[body.length - 1]
//         switch(this.state.direction){
//             case LEFT:
//                 head = [head[0] - 2, head[1]]
//                 break

//             case RIGHT:
//                 head = [head[0] + 2, head[1]]
//                 break

//             case DOWN:
//                     head = [head[0], head[1] + 2];
//                     break;

//             case UP:
//                     head = [head[0], head[1] - 2];
//                     break;
//         }
//         body.push(head)
//         body.shift()
//         this.setState({
//             snake: body
//         })
//     }   

//     onSnakeOutOfBounds() {
//         let head = this.state.snake[this.state.snake.length - 1];
//           if (head[0] >= 100 || head[1] >= 100 || head[0] < 0 || head[1] < 0) {
//             gameOver()
//           }
//       }

//     onSnakeCollapsed() {
//         let snake = [...this.state.snake];
//         let head = snake[snake.length - 1];
//         snake.pop();
//         snake.forEach(dot => {
//           if (head[0] == dot[0] && head[1] == dot[1]) {
//             gameOver();
//           }
//         });
//       }

//     snakeEat(){
//         let head = this.state.snake[this.state.snake.length - 1];
//         let food = this.state.food;
//         if (head[0] == food.x && head[1] == food.y) {
//           this.setState({
//             food: getRandom()
//           });
//           this.increaseSnake();
//           this.increaseSpeed();
//         }
//     }

//     increaseSnake() {
//         let newSnake = [...this.state.snake];
//         newSnake.unshift([]);
//         this.setState({
//           snakeDots: newSnake
//         });
//       }
    
//       increaseSpeed() {
//         if (this.state.speed > 10) {
//           this.setState({
//             speed: this.state.speed - 20
//           });
//         }
//       }

//     render(): React.ReactNode {
//         const { snake, food } = this.state;
//         return (
//             <div className="game-area">
//             <Snake snakeDots={snake} />
//             <Food dot={food} />/
//           </div>
//         )
//     }
// }

// // export function Grid(){
// //     const grid_count = 10
// //     const grid = []

// //     for (let i = 0; i < grid_count; i ++){
// //         for (let j = 0; j < grid_count; j ++){
// //             grid.push(<div className="cell"  />)
// //         }
// //     }
// //     return(
// //         <div className="grid">
// //             {
// //                 grid.map((cell, key) => (
// //                     cell
// //                 ))
// //             }
// //         </div>
// //     )
// // }
// export default Snake