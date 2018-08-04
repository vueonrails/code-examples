json.extract! game, :id, :board, :x, :o, :status, :created_at, :updated_at
json.url game_url(game, format: :json)
