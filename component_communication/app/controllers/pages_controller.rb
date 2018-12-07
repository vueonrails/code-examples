class PagesController < ApplicationController
  def index
    flash[:notice] = 'Hello from Rails!'
    flash[:success] = 'Success from Rails!'
    flash[:error] = 'Error from Rails!'
    flash[:warning] = 'Warning from Rails!'
  end
end
