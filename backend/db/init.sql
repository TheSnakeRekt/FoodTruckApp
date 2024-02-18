CREATE TABLE IF NOT EXISTS MSCH_truck_inventory (
    id SERIAL PRIMARY KEY,
    item_name VARCHAR(100) NOT NULL,
    img_source VARCHAR(100),
    barcode VARCHAR(255),
    quantity INTEGER,
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    contact VARCHAR(255),
    user_role VARCHAR(10) NOT NULL,
    user_password TEXT NOT NULL,
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);

CREATE TABLE IF NOT EXISTS trucks (
    id SERIAL PRIMARY KEY,
    truck_brand VARCHAR(255) NOT NULL,
    truck_model VARCHAR(255) NOT NULL,
    truck_license_plate VARCHAR(255) NOT NULL,
    assigned_manager_id VARCHAR(255),
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);

CREATE TABLE IF NOT EXISTS procedures (
    id SERIAL PRIMARY KEY,
    procedure_name VARCHAR(100) NOT NULL,
    procedure_goal VARCHAR(100) NOT NULL,
    procedure_description VARCHAR(255),
    procedure_execution_time_id INTEGER,
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


CREATE TABLE IF NOT EXISTS execution_time (
    id SERIAL PRIMARY KEY,
    to_be_done_by_role VARCHAR(10) NOT NULL,
    to_be_done_before VARCHAR(100) NOT NULL,
    to_be_done_after VARCHAR(100) NOT NULL,
    to_be_done_required boolean DEFAULT 1 NOT NULL,
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);

CREATE TABLE IF NOT EXISTS tasks (
    id SERIAL PRIMARY KEY,
    task_name VARCHAR(100) NOT NULL,
    task_description TEXT NOT NULL,
    procedure_id INTEGER NOT NULL,
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);

CREATE TABLE IF NOT EXISTS executed_procedures (
    id SERIAL PRIMARY KEY,
    executed_by_user_id INTEGER NOT NULL,
    executed_for_truck_id INTEGER NOT NULL,
    procedure_data TEXT NOT NULL,
    procedure_completion DECIMAL(10,2) NOT NULL,
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);