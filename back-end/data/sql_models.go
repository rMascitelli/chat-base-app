package data

import (
	"database/sql"
	"fmt"
)

// Can be used to unify interactions with SQL
type SQLModel interface {
	Insert() error
	Update() error
	SelectAll() error
}

// Class for interacting with the `user_info` Table
type UserInfo struct {
	UserID   int    `json:user_id`
	Email    string `json:email`
	Password string `json:password`
	Username string `json:username`
	DB       *sql.DB
}

func NewUserInfo() *UserInfo {
	db, err := ConnectToDB()
	if err != nil {
		fmt.Printf("Could not connect to DB, err: %v\n", err)
		return nil
	}
	return &UserInfo{
		DB: db,
	}
}

func (u *UserInfo) Insert() error {
	query := `insert into "user_info" ("user_id", "email", "password", "username") values ($1, $2, $3, $4)`
	_, err := u.DB.Exec(query, u.UserID, u.Email, u.Password, u.Username)
	return err
}

func (u *UserInfo) Update() error {
	query := `insert into "user_info" ("user_id", "email", "password", "username") values ($1, $2, $3, $4)`
	_, err := u.DB.Exec(query, u.UserID, u.Email, u.Password, u.Username)
	return err
}

func (u *UserInfo) SelectAll() error {
	query := `select * from user_info`
	rows, err := u.DB.Query(query)
	if err != nil {
		return err
	}

	defer rows.Close()
	for rows.Next() {
		var user UserInfo

		err = rows.Scan(&user.UserID, &user.Email, &user.Password, &user.Password)
		if err != nil {
			return err
		}

		fmt.Printf("Record = %d, %s, %s, %s\n", user.UserID, user.Email, user.Password, user.Password)
	}
	return nil
}
