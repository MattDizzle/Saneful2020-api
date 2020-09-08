CREATE TABLE saved_game (
    saved_game_id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    current_x_coord INTEGER NOT NULL,
    -- CHECK(current_x_coord<=14)
    current_y_coord INTEGER NOT NULL,
    -- CHECK(current_y_coord<=9)
    CONSTRAINT CHK_coords CHECK (current_x_coord<=14 AND current_y_coord<=9 AND current_x_coord>=0 AND current_y_coord>=0),
    money_counter INTEGER NOT NULL,
    health_points INTEGER NOT NULL,
    sanity_points INTEGER NOT NULL,
    energy_points INTEGER NOT NULL,
    elapsed_time INTEGER NOT NULL,
    user_id INTEGER REFERENCES saneful_user(user_id) ON DELETE CASCADE NOT NULL,
    
);


-- game state contains:
-- game state id
-- character's current position/coordinates
-- direction they're facing
-- money counter
-- health points
-- sanity points
-- energy points
-- elapsed game time (measured in ticks or something, one step is one tick, working at computer is 10 ticks, etc)
-- inventory (separate table)
-- user id (references user id as foreign key)