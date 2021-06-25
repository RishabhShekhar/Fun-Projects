import cv2
import os
import datetime
import shutil
import time

# Load the cascade
face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + "haarcascade_frontalface_default.xml")

# To capture video from webcam.
cap = cv2.VideoCapture(0)

# To use a video file as input
# cap = cv2.VideoCapture('filename.mp4')

os.mkdir("Frames")
flag = False
start_time = -999999999999

while True:
    # Read the frame
    _, img = cap.read()

    # Write the frame
    cv2.imwrite('Frames/face_' + str(datetime.datetime.now()) + '.jpg', img)

    # Convert to grayscale
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

    # Detect the faces
    faces = face_cascade.detectMultiScale(gray, 1.1, 4)

    # Draw the rectangle around each face
    for (x, y, w, h) in faces:
        cv2.rectangle(img, (x, y), (x + w, y + h), (255, 0, 0), 2)

    center_coordinates = (120, 50)

    # Radius of circle
    radius = 0

    # Blue color in BGR
    color = (0, 0, 255)
    if len(faces) != 0 and (not flag):
        Flag = True
        start_time = time.time()
    if len(faces) == 0:
        start_time = -99999999
        flag = False

    if time.time() - start_time < 3:
        color = (0, 255, 0)

    # Line thickness of 2 px
    thickness = 60

    # Using cv2.circle() method
    # Draw a circle with blue line borders of thickness of 2 px
    img = cv2.circle(img, center_coordinates, radius, color, thickness)

    # Displaying the image
    cv2.imshow('img', img)

    # Display
    cv2.imshow('img', img)

    # Stop if escape key is pressed
    k = cv2.waitKey(30) & 0xff
    if k == 27:
        break

# Release the VideoCapture object
cap.release()
shutil.rmtree("Frames")