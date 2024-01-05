import { useEffect } from "react";
import PropTypes from "prop-types";
// import { pdfjs, Worker, Viewer } from "@react-pdf-viewer/core";
// import samplePDF from "../../assets/sample.pdf";
import "@react-pdf-viewer/core/lib/styles/index.css";
import poster from "../../assets/video-poster.png";
import "./Modal.css";

ModalDashboard.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  title: PropTypes.string,
  category: PropTypes.string,
  audioRef: PropTypes.object,
  videoRef: PropTypes.object,
};

export default function ModalDashboard({
  isOpen,
  onClose,
  title,
  category,
  audioRef,
  videoRef,
}) {
  const modalStyle = {
    display: isOpen ? "block" : "none",
  };

  useEffect(() => {
    if (videoRef.current) {
      if (!isOpen) {
        videoRef.current.contentWindow.postMessage(
          '{"event":"command","func":"pauseVideo","args":""}',
          "*"
        );
      }
    }
  }, [isOpen, videoRef]);

  return (
    <div className={`modal ${isOpen ? "open" : "closed"}`}>
      <div
        className={`modal-dashboard-content modal-content ${
          isOpen ? "open" : ""
        }`}
        style={modalStyle}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="close">
          <span onClick={onClose}>&times;</span>
        </div>

        <h3>
          {title} / <span>Lecture 1</span>
        </h3>
        <div className="sub-title">
          <span>Lecturer: Dr. Alex Adebiyi</span>
          <span>|</span>
          <span>10th Dec. 2023</span>
          <span>10:00pm - 12:00pm</span>
          <span>|</span>
          <span>Attendance: 22 Students</span>
        </div>

        <div className="video">
          {category === "Video" && (
            <iframe
              ref={videoRef}
              width="100%"
              height="400"
              src="https://player.vimeo.com/external/269971860.sd.mp4?s=a3036bd1a9f15c1b31daedad98c06a3b24cdd747&profile_id=164&oauth2_token_id=57447761"
              title="Peter Fowler's Water Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              //   allowFullScreen
            ></iframe>
          )}
          {category === "Audio" && (
            <video
              ref={audioRef}
              controls
              poster={poster}
              width="100%"
              height="400"
            >
              <source
                src="https://file-examples.com/storage/fe0bd45a6765817dc92f8a6/2017/11/file_example_MP3_700KB.mp3"
                type="audio/mp3"
              />
              Your browser does not support the audio element.
            </video>
          )}

          {/* {category === "File" && (
            <>
              <div style={{ width: "100%", height: "500px" }}>
                <Worker
                  workerUrl={`https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`}
                >
                  <Viewer
                    file={samplePDF}
                    onPageLoadSuccess={onDocumentLoadSuccess}
                  />
                </Worker>
              </div>
              <p>
                Page {pageNumber} of {numPages}
              </p>
            </>
          )} */}
        </div>
      </div>
    </div>
  );
}
