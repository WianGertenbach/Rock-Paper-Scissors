# Rock-Paper-Scissors
A Rock, Paper, Scissors game as part of The Odin Project. The pseudocode below contains my initial thought process for solving this challenge. 

## Pseudocode:
1. Game Flow
    - First round starts
    - Human selects option
    - Computer selects option
    - Result is revealed and stored
    - Second round starts
    - Previous steps repeat for four more rounds
    - Program checks which player has the highest score and declares a winner

### Steps
1. Computer choice
    - Generate random number between 1 and 3 (both included)
    - Assign a string to one of the numbers (1 = Rock, 2 = Paper, 3 = Scissors)
    - Store choice for reveal after human choice
2. Human choice
    - Prompt user to select an option
    - Store human option in variable. 
3. Declare score variables
    - After the reveal of the computer's choice, the program evaluates the result and stores both players' scores in a variable
    - Both variables are initialized with 0. 

