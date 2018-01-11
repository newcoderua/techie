class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )
    # debugger
    if @user
      login(@user)
      # debugger
      render 'api/users/show'
    else
      render json: ["invalid credentials"],status: 422
    end
  end

  def destroy
    # debugger
    @user = current_user

    if current_user
      logout
      render "api/users/show"
    else
      render json: ["no current user"], status: 404
    end
  end
end