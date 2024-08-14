---
sidebar_position: 1
---

# Setting Up MFR API

Let's discover the setup processes of installing mfr api to your local machine .

## Getting started

In order to setup  MFR API you will need the following prerequistes:

- Postgres SQL 14 or greater
- Python 2.7 or greater
- Supervisor
- PostGIS Extension
   
### Setup Postgresql (PostgreSQL 14)

Refer to [Postgresql 14 installation guide](https://techviewleo.com/how-to-install-postgresql-database-on-ubuntu/)


## Install Postgis extension in Postgresql 14

The instructions in this guide are based on PostgreSQL version 14 and PostGIS 3.2 running on Ubuntu 22.04.



### Step 1: Install Packages for PostGIS

  Assuming that PostgreSQL is already available, PostGIS installation consists of 2 steps:

  - Install postgis, the PostGIS package, from the operating system's package manager.

  - Load PostGIS into a PostgreSQL database.


  :::info[Important Note]
  While this guide demonstrates the first step for Ubuntu, the general procedure is the same for all operating systems. The second step is the same for both standalone
  servers as well as Vultr Managed Databases for PostgreSQL.
  :::

  #### Install on Ubuntu

  Optional - Check Compatibility

  In general, there should be no compatibility issues on Ubuntu. Check the version of PostgreSQL installed on your operating system. On the PostgreSQL command line,
  enter:

  ```sql
  SELECT version();
  ```

  Check the version of PostGIS available on the apt package manager:

  ``` 
  apt search ^postgis$
  ```

  Check the compatibility page to ensure the available version of PostGIS is compatible with the installed version of PostgreSQL. Install the Package

  Install the postgis package on Ubuntu using the apt package manager.

  ```
  sudo apt install postgis
  ```

  This will install the latest version of PostGIS available for the operating system.

### Step 2: Load the PostGIS Extension

  #### Check If PostGIS Exist

  ```sql
  SELECT * FROM pg_available_extensions;
  ```

  After installing PostGIS on the operating system, it should be included in this list. Load the Extension

  Use the CREATE EXTENSION command of PostgreSQL to create a new extension for PostGIS: 

  ```sql
  CREATE EXTENSION postgis;
  ```

  The PostGIS extension should now be loaded into the database. Check Installation

  Check that the PostGIS extensions are loaded:

  ```sql
  SELECT * FROM pg_extension;
  ```

  The above command shows the list of all loaded extensions. You can also check the version of PostGIS installed:

  ```sql
  SELECT postgis_version();
  ```

## Install Supervisor

supervisor is a system for controlling process state. To install it in Ubuntu 20.04^, run:

  ```
  sudo apt install supervisor
  ```

  :::info[Setting up supervisoe]
  Refer to [Supervisor documentaion for setting up supervisor](http://supervisord.org/configuration.html#supervisorctl-section-settings)
  :::

## Install Gunicorn

  Gunicorn is a Event-based HTTP/WSGI server. To install it run:

  ```
  sudo apt install gunicorn
  ```

  :::info[Setting up gunicorn]
  Refer to [Gunicorn documentation for setting up gunicorn](https://docs.gunicorn.org/en/stable/)
  :::

## Setup MFR API

  clone MFR API from git:

  ```
  git clone https://github.com/uonafya/mfl_api.git && cd mfl_api
  ```

  ### Install Virtualenv

  If using Ubuntu or any debian based linux distribution install as follows:

  ```
  sudo apt install virtualenv
  ```

  and then create a virtual enviroment

  ```
  virtualenv env
  ```

  ### Activating the Virtual environment

  ```
  source venv/bin/activate
  ```

  ### Install Requirements

  ```
  pip install -r requirements.txt
  ```

  ### Run Migrations

  ```
  python manage.py makemigrations && \
  python manage.py migrate
  ```
  ## Spin up MFR API

  Run the following in your terminal

  ```
  sudo systemctl start supervisor
  ```

  If you have followed all the steps MFR API should now be listening on  the default port assigned by supervisor
  












  