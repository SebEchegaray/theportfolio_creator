class WorkController < ApplicationController
  def create
    work_experience = WorkExperience.new(
      title: params[:title],
      company_name: params[:company_name],
      start_month: params[:start_month],
      start_year: params[:start_year],
      end_month: params[:end_month],
      end_year: params[:end_year],
      industry: params[:industry],
      description: params[:description]
    )

    work_experience.save
  end
end