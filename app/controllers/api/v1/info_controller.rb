class Api::V1::InfoController < ApplicationController
  def index
    work_experience = WorkExperience.all
    render json: work_experience
  end
end