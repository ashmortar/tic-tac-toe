## Specifications

|   Behavior   |    Input    |    Output     |
|-------------:|:-----------:|:--------------|
|can fill a space with an x| blank space + action | x |
|can fill a space with an o| blank space + action | o |
|will alternate between x and o | blank space + action, blank space + action | x, o|
|can determine if a space is already occupied| x space + action | no change |
|can check if a column contains all of the same value | x, x ,x | "you win" |
|can check if a row contains all of the same value | x, x, x | "you win"|
|can check if a diagonal contains all of the same value | x, x, x | "you win" |
|can check if the game is a draw | full board no win | "draw" |
|can run "o" automatically| "one player" | autoPig runs "o" |
