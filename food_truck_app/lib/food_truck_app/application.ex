defmodule FoodTruckApp.Application do
  # See https://hexdocs.pm/elixir/Application.html
  # for more information on OTP Applications
  @moduledoc false

  use Application

  @impl true
  def start(_type, _args) do
    children = [
      FoodTruckAppWeb.Telemetry,
      FoodTruckApp.Repo,
      {DNSCluster, query: Application.get_env(:food_truck_app, :dns_cluster_query) || :ignore},
      {Phoenix.PubSub, name: FoodTruckApp.PubSub},
      # Start the Finch HTTP client for sending emails
      {Finch, name: FoodTruckApp.Finch},
      # Start a worker by calling: FoodTruckApp.Worker.start_link(arg)
      # {FoodTruckApp.Worker, arg},
      # Start to serve requests, typically the last entry
      FoodTruckAppWeb.Endpoint
    ]

    # See https://hexdocs.pm/elixir/Supervisor.html
    # for other strategies and supported options
    opts = [strategy: :one_for_one, name: FoodTruckApp.Supervisor]
    Supervisor.start_link(children, opts)
  end

  # Tell Phoenix to update the endpoint configuration
  # whenever the application is updated.
  @impl true
  def config_change(changed, _new, removed) do
    FoodTruckAppWeb.Endpoint.config_change(changed, removed)
    :ok
  end
end
