json.extract! games_player, :id, :piece, :game, :player, :created_at, :updated_at
json.url games_player_url(games_player, format: :json)
