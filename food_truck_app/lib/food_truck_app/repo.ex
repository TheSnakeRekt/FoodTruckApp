defmodule FoodTruckApp.Repo do
  use Ecto.Repo,
    otp_app: :food_truck_app,
    adapter: Ecto.Adapters.Postgres
end
