json.extract! game, :id, :board, :x, :o, :status, :games_players, :winner, :created_at, :updated_at
json.url game_url(game, format: :json)
