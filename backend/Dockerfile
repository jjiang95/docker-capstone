# Use an official Python runtime as a parent image
FROM python:3.11-alpine

# Set the working directory in the container
WORKDIR /backend

# Copy the current directory contents into the container
COPY . /backend

# Install any needed dependencies specified in requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Expose port 5000 (the default port for Flask)
EXPOSE 5000

# Run app.py when the container launches
CMD ["python", "app.py"]